function Casercheper() {
    let str ='Ashish';
    const alphbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encoded = '';
    for (let i=0; i < str.length; i++) {
        const index = alphbet.indexOf(str[i]);// index of check the  string index in alphabet
        encoded += rot13[index];//if index check  rot 13 and add in encoded
    }

    console.log(encoded);//print the encoded in console .log

    
}Casercheper();