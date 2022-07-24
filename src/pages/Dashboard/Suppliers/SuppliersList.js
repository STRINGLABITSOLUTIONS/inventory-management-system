import React, { useEffect, useState } from 'react';
import PrintButton from '../../../components/Buttons/PrintButton';
import Input from '../../../components/FormComponents/Input';
import TableRow from '../../../components/TableRow';
import SaveButton from '../../../components/Buttons/SaveButton';
import EditButton from '../../../components/Buttons/EditButton';
import DeleteButton from '../../../components/Buttons/DeleteButton';
import { toast } from 'react-toastify';

const SuppliersList = () => {
    const tableHeadItems = ['SN', 'Name', 'Phone', 'Website', 'Email', 'Address', 'Creator', 'Created At', 'Updated By', 'Updated At', 'Actions'];

    const tableHead = <tr>
        {
            tableHeadItems?.map((tableHeadItem, index) => <th key={index} className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    const addSupplier = event => {
        event.preventDefault();

        const name = event?.target?.SupplierName?.value;
        const phone = event?.target?.SupplierPhone?.value;
        const website = event?.target?.SupplierWebsite?.value;
        const email = event?.target?.SupplierEmail?.value;
        const address = event?.target?.SupplierAddress?.value;
        const addedBy = 'admin';
        const addedTime = new Date();
        const updatedBy = 'admin';
        const updatedTime = new Date();

        const supplierDetails = { name, phone, website, email, address, addedBy, addedTime, updatedBy, updatedTime };

        // send data to server
        fetch('https://stringlab-ims-server.herokuapp.com/api/suppliers/lists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(supplierDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast(
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{name} added successfully.</span>
                        </div>
                    </div>
                );
            });
    };

    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetch('https://stringlab-ims-server.herokuapp.com/api/suppliers/lists')
            .then(res => res.json())
            .then(suppliers => setSuppliers(suppliers));
    }, [suppliers]);

    return (
        <section className='p-4'>
            <form onSubmit={addSupplier}>
                <div className="flex justify-between items-center">
                    <h2 className='text-2xl text-center font-bold'>Suppliers Lists</h2>

                    <div className='flex items-center gap-x-4'>
                        <SaveButton btnSize='btn-xs' />
                        <PrintButton btnSize='btn-xs' />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className='flex place-items-center gap-4 mt-4 mb-8'>
                        <Input title={'Supplier Name'} name='SupplierName' isRequired='required' type='text' />
                        <Input title={'Supplier Phone'} name='SupplierPhone' isRequired='required' type='number' />
                        <Input title={'Supplier Website'} name='SupplierWebsite' isRequired='required' type='text' />
                        <Input title={'Supplier Email'} name='SupplierEmail' isRequired='required' type='email' />
                        <Input title={'Supplier Address'} name='SupplierAddress' isRequired='required' type='text' />
                    </div>
                </div>
            </form>

            <table className="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    {
                        suppliers.map((supplier, index) =>
                            <TableRow key={supplier._id} tableRowsData={
                                [
                                    index + 1,
                                    supplier.name,
                                    supplier.phone,
                                    supplier.website, supplier.email,
                                    supplier.address,
                                    supplier.addedBy,
                                    supplier?.addedTime?.slice(0, 10),
                                    supplier.updatedBy,
                                    supplier?.updatedTime?.slice(0, 10),
                                    <span className='flex items-center gap-x-1'>
                                        <EditButton />
                                        <DeleteButton deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/suppliers/lists/' itemId={supplier._id} />
                                    </span>
                                ]
                            } />)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default SuppliersList;