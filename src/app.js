/**
 * TODO 7.
 * Import fungsi formatUser, findByName, fildetByMajor
 * dari file controllers/UserController.js
 */
// CODE HERE
import {formatUser, findByName, filterByMajor} from "controllers/UserController.js";
let users = [
  {name: "Aripin", age: 22, major: "Informatics engineering"},
  {name: "Aris Kurnia", age: 18, major: "Medicine"},
  {name: "Nur Izah Indah", age: 20, major: "Information system"},
  {name: "Neng Yuna Yuningsih", age: 23, major: "Teacher education"},
  {name: "Apriliani Feri", age: 22, major: "Art music"}
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const user of users) {
    console.log(user);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
 const store = (user) => {
  users.push(user);
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index,user) => {
  users[index] = user;
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  users.splice(index,1)
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };




/**
 * Fungsi Main.
 * Jangan edit atau hapus fungsi main.
 * Fungsi main untuk testing aplikasi.
 */
(async () => {
  console.log("# Format User: Mr/Mrs");
  const resultFormatUsers = await formatUser("Mr/Mrs");
  console.log(resultFormatUsers);

  console.log("\n# Find User by Name: Aufa");
  const resultFindByName = await findByName("Aufa");
  console.log(resultFindByName);

  console.log("\n# Filter User by Major: English");
  const resultFilterByMajor = await filterByMajor("English");
  console.log(resultFilterByMajor);
})();
