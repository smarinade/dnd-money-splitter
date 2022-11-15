export const convertToJson = (formData : FormData) : object => {

    const object : any = {};
    formData.forEach((value : FormDataEntryValue, key: string) => {
        if(!Reflect.has(object, key)){
            object[key] = value;
            return;
        }

        if(!Array.isArray(object[key])){
            object[key] = [object[key]];
        }

        object[key].push(value);

    });
    return object;

};
