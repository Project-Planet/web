import fire from "../components/APIS/firebase";

async function userid() {
  const id = await fire.auth().currentUser.uid;

  return id;
}

export const NgoDataModel = {
  head: null,
  chairman: null,
  joined: Date.now(),
  ngoProfileId: userid(),
  posts: [],
  updatee: Date.now(),
  vounteers: [],
};
