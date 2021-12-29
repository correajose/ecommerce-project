const verifData = ({setEmailWarning, setIdNumberWarning, setPhoneNumberWarning}, client, address) => {

    setIdNumberWarning(false);
    setEmailWarning(false);
    setPhoneNumberWarning(false);

    if (client.idNumber.length !== 8) { setIdNumberWarning(true); return false}
    if (client.emailAddress !== client.emailConfirm) { setEmailWarning(true); return false}
    if (client.phoneNumber.length < 9) { setPhoneNumberWarning(true); return false}

    return true;
};

export default verifData;