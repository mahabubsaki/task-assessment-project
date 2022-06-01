import React from 'react';
import toast from 'react-hot-toast';

const ServiceModal = ({ serviceModal, setServiceModal }) => {
    const { serviceName, cost } = serviceModal;
    const handleAppoint = async (e) => {
        e.preventDefault();
        toast.success('Your appointment has been successfully applied')
        setServiceModal(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setServiceModal(null)}>✕</label>
                    <h3 class="text-xl font-bold">{serviceName}</h3>
                    <h3 class="text-lg font-bold">Cost : ${cost}</h3>
                    <form onSubmit={handleAppoint}>
                        <select class="select select-bordered w-full" name="doctor" defaultValue="" required>
                            <option disabled value="">Select Your Preferred Doctor?</option>
                            <option value="Patricia Reed">Patricia Reed</option>
                            <option value="Waldo Howe">Waldo Howe</option>
                            <option value="Nicole Maxwel">Nicole Maxwell</option>
                            <option value="Philip Parker">Philip Parker</option>
                            <option value="Milo Bailey">Milo Bailey</option>
                            <option value="Clive Shaw">Clive Shaw</option>
                        </select>
                        <input class="w-full border rounded p-2 outline-none focus:shadow-outline bg-[#eeebeb] my-3" type="text" name="name" id="name" placeholder="Your Name" required />
                        <button class="btn btn-success block mx-auto" type="submit">Confirm Apoint</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;