import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabinData, id) {
  const cabinData = newCabinData?.newCabinData ?? newCabinData;
  const cabinId = id ?? newCabinData?.id;

  const hasImagePath =
    typeof cabinData?.image === "string" &&
    cabinData.image.startsWith?.(supabaseUrl);

  const imageName =
    hasImagePath || !cabinData?.image
      ? null
      : `${Math.random()}-${cabinData.image.name}`.replaceAll("/", "");

  const imagePath =
    hasImagePath || !cabinData?.image
      ? (cabinData?.image ?? null)
      : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!cabinId) query = query.insert([{ ...cabinData, image: imagePath }]);

  // B) EDIT
  if (cabinId)
    query = query.update({ ...cabinData, image: imagePath }).eq("id", cabinId);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  if (hasImagePath || !cabinData?.image) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
