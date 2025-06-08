import fs from 'node:fs'

const oldFolderName = './dist'; // Path to the folder you want to rename
const newFolderName = './docs'; // The new name and path for the folder

fs.rename(oldFolderName, newFolderName, (err) => {
  if (err) {
    console.error('Error renaming folder:', err);
  } else {
    console.log(`Folder "${oldFolderName}" renamed to "${newFolderName}" successfully.`);
  }
});