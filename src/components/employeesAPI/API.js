const employees = [
  {
    _id: "1",
    name: { first: "Angelo", last: "Gibson" },
    email: "brad.gibson@yahoo.com",
    dob: "14-01-1977",
    phone: "(033)-654-865",
    image: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
  },
  {
    _id: "2",
    name: { first: "Betty", last: "Dickens" },
    email: "angela.dickens@gmail.com",
    dob: "24-03-1852",
    phone: "(042)-574-986",
    image: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
  },
  {
    _id: "3",
    name: { first: "Charlie", last: "Scalabrini" },
    email: "john.sclab@GMX.com",
    dob: "11-07-2004",
    phone: "(674)-876-043",
    image: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
  },
  {
    _id: "4",
    name: { first: "Donna", last: "Chiu" },
    email: "michelle.ch@Proton.com",
    dob: "24-08-1875",
    phone: "(854)-582-245",
    image: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
  },
  {
    _id: "5",
    name: { first: "Ethan", last: "Puck" },
    email: "charlie.pck@gmail.com",
    dob: "16-04-2001",
    phone: "(351)-843-954",
    image: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
  },
  {
    _id: "6",
    name: { first: "Fiona", last: "Shox" },
    email: "emily.shx@hotmail.com",
    dob: "26-09-1772",
    phone: "(519)-256-974",
    image: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
  },
  {
    _id: "7",
    name: { first: "George", last: "Dandansoy" },
    email: "rolex.soy@yahoo.com",
    dob: "03-12-1975",
    phone: "(964)-232-412",
    image: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
  },
  {
    _id: "8",
    name: { first: "Hannah", last: "Escobar" },
    email: "janica.cobar@.AOLcom",
    dob: "25-04-1865",
    phone: "(431)-613-976",
    image: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
  },
  {
    _id: "9",
    name: { first: "Ian", last: "Ford" },
    email: "xan.for@iCloud.com",
    dob: "27-05-1985",
    phone: "(613)-631-974",
    image: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
  },
  {
    _id: "10",
    name: { first: "Jessica", last: "Tour" },
    email: "jes.tour@Zoho.com",
    dob: "18-11-2002",
    phone: "(724)-382-937",
    image: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
  },
  {
    _id: "11",
    name: { first: "Keith", last: "Ardon" },
    email: "keith.ard@yahoo.com",
    dob: "06-07-1953",
    phone: "(023)-612-852",
    image: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
  },
  {
    _id: "12",
    name: { first: "Lisa", last: "Shanx" },
    email: "li.shan@gmail.com",
    dob: "21-11-1952",
    phone: "(152)-642-752",
    image: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
  },
  {
    _id: "13",
    name: { first: "Max", last: "Short" },
    email: "max.sho@GMX.com",
    dob: "06-12-2001",
    phone: "(723)-634-633",
    image: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
  },
  {
    _id: "14",
    name: { first: "Nina", last: "Scrub" },
    email: "nin.scrun@Proton.com",
    dob: "15-05-1953",
    phone: "(153)-134-754",
    image: "https://randomuser.me/api/portraits/thumb/women/7.jpg",
  },
  {
    _id: "15",
    name: { first: "Oscar", last: "Punk" },
    email: "osca.pun.com",
    dob: "05-12-2001",
    phone: "(513)-642-613",
    image: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
  },
  {
    _id: "16",
    name: { first: "Pia", last: "Vag" },
    email: "pia.vad@hotmail.com",
    dob: "17-10-1753",
    phone: "(754)-134-754",
    image: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
  },
  {
    _id: "17",
    name: { first: "Quirk", last: "Dane" },
    email: "quirk.dane@yahoo.com",
    dob: "25-02-1865",
    phone: "(642)-642-436",
    image: "https://randomuser.me/api/portraits/thumb/men/9.jpg",
  },
  {
    _id: "18",
    name: { first: "Rita", last: "Fridge" },
    email: "ron.fridge@.AOLcom",
    dob: "22-02-1886",
    phone: "(613)-123-743",
    image: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
  },
  {
    _id: "19",
    name: { first: "Sean", last: "Connery" },
    email: "sean.conCloud.com",
    dob: "16-12-1853",
    phone: "(531)-632-643",
    image: "https://randomuser.me/api/portraits/thumb/men/10.jpg",
  },
  {
    _id: "20",
    name: { first: "Tina", last: "Turner" },
    email: "tina.turner@Zoho.com",
    dob: "23-12-2007",
    phone: "(321)-234-742",
    image: "https://randomuser.me/api/portraits/thumb/women/10.jpg",
  },
  {
    _id: "21",
    name: { first: "Uriel", last: "Nanongs" },
    email: "uriel.nan@yahoo.com",
    dob: "12-06-1963",
    phone: "(523)-622-632",
    image: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
  },
  {
    _id: "22",
    name: { first: "Veronica", last: "Davis" },
    email: "veron.davis@gmail.com",
    dob: "16-05-1975",
    phone: "(612)-632-622",
    image: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
  },
  {
    _id: "23",
    name: { first: "William", last: "Hoax" },
    email: "william.hoax@GMX.com",
    dob: "22-12-2013",
    phone: "(632)-234-632",
    image: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
  },
  {
    _id: "24",
    name: { first: "Xena", last: "Tan" },
    email: "xena.tan@Proton.com",
    dob: "12-09-1823",
    phone: "(423)-754-233",
    image: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
  },
  {
    _id: "25",
    name: { first: "Yordan", last: "Pake" },
    email: "yord.pak@gmail.com",
    dob: "23-08-2005",
    phone: "(532)-233-632",
    image: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
  },
  {
    _id: "26",
    name: { first: "Zyleika", last: "Shane" },
    email: "zyleika.shane@hotmail.com",
    dob: "16-11-1823",
    phone: "(344)-532-234",
    image: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
  },
];

export function getEmployees() {
  return employees;
}
