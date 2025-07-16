import { createHmac, randomBytes } from "crypto";

export const createHash = function (text,salt) {
    return createHmac('sha256', salt)
        .update(text)
        .digest("hex");
}

export const generateRandomBytes = function(size){
    return randomBytes(size).toString();
}
