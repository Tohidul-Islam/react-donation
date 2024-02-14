
const getStoredDonations = () => {
    const storedDonation = localStorage.getItem('total-donations');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}


const savedDonation = (id) => {
    const storedDonations = getStoredDonations();
    const exist = storedDonations.find(donationId => donationId === id);
    if (!exist) {
        storedDonations.push(id);
        localStorage.setItem('total-donations', JSON.stringify(storedDonations))
    }
}

export { getStoredDonations, savedDonation };