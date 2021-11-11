
import {Filesystem, Directory, Encoding} from '@capacitor/filesystem';

const saveCipherText = async () => {
    /*
        The purpose of this hook is to allow the app to save the generated ciphertext to a text file that is accessible to the user.
        Ideally, this should mean that the hook is able to:
        - generate a unique filename (i.e. fileName =   'cipherText" + new Date().getTime() + ".txt"
        - create the file
        - write the resulting ciphertext to the file
        - save the file to the directory
        To do this, I will use the capacitor filesystem.
    */
   const fileName = "cipherText" + new Date().getTime() + '.txt'; //generating the filename each time the hook is used
    await Filesystem.writeFile({
        path: '/tempFile/' + fileName, //placeholder for the path
        data: 'placeholder text! to be replaced with the actual ciphertext',
        directory: Directory.Documents,
        encoding: Encoding.UTF8, // The data has to be encoded as UTF8 to be a string
    });
    // so, my issue is that I'm not really sure how to connect this hook to the other parts of the app so I can access the
    // generated ciphertext
    // if i can figure that out, I should be able to test the filesaving capacity

;}