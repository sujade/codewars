function createPhoneNumber(numbers){
    let phoneNumber = "(xxx) xxx-xxxx";

    for(let i = 0; i < numbers.length; i++)
    {
        phoneNumber = phoneNumber.replace('x', numbers[i]);
    }

    return phoneNumber;
}