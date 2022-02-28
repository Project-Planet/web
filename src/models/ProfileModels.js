import fire from "../components/APIS/firebase";

//eslint-disable-next-line
async function userid() {
  const userCurrent = await fire.auth().currentUser;
  const id = userCurrent.uid;

  return id;
}

export const VolunteerProfileModel = (joinAs, uid, email) => ({
  address: null,
  city: null,
  country: null,
  daysForWork: [],
  email: email,
  firstName: null,
  joinedAs: joinAs,
  landline: null,
  ngo: joinAs === "organization",
  ngoType: null,
  phoneNumber: null,
  zipcode: null,
  secondName: null,
  state: null,
  uid: uid,
  profilePic: null,
});
export const NgoProfileModel = (joinAs, uid, email) => ({
  address: null,
  city: null,
  country: null,
  daysForWork: [],
  email: email,
  organizationName: null,
  joinedAs: joinAs,
  landline: null,
  ngo: joinAs === "organization",
  ngoType: `/ngo/${uid}`,
  phoneNumber: null,
  zipcode: null,
  state: null,
  uid: uid,
  profilePic: null,
});
