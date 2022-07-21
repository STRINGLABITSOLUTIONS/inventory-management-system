import React from 'react';
import CancelButton from '../../../../components/Buttons/CancelButton';
import ModalCloseButton from '../../../../components/Buttons/ModalCloseButton';
import NewButton from '../../../../components/Buttons/NewButton';
import PrintButton from '../../../../components/Buttons/PrintButton';
import SaveButton from '../../../../components/Buttons/SaveButton';
import Input from '../../../../components/FormComponents/Input';
import Select from '../../../../components/FormComponents/Select';
import ModalHeading from '../../../../components/Headings/ModalHeading';
import ItemsViewNumber from '../../../../components/ItemsViewNumber';
import SuppliersDocumentsRow from './SuppliersDocumentsRow';

const SuppliersList = () => {
    const tableHeadItems = ['SN', 'Voucher', 'Supplier', 'Creator', 'Status', 'Quantity', 'VAT', 'Discount', 'Price', 'Payable Price', 'Created At', <ItemsViewNumber />];

    const tableHead = <tr>
        {
            tableHeadItems?.map(tableHeadItem => <th className='text-xs' >{tableHeadItem}</th>)
        }
    </tr>;

    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Suppliers Documents</h2>

            <div className='grid grid-cols-6 gap-4 mb-2'>
                <Select title={'From'} />
                <Select title={'To'} />
                <Select title={'Period'} />
                <Input title={'TP Price'} />
                <Input title={'Payable TP Price'} />
                <Input title={'MRP Price'} />
            </div>

            <div className='flex justify-between gap-4 text-xs'>
                <div className='grid grid-cols-5 gap-2 mb-4'>
                    <button class="btn btn-xs capitalize">Daily Product Order</button>
                    <button class="btn btn-xs capitalize">Monthly Product Order</button>
                    <button class="btn btn-xs capitalize">Supplier Wise Product Order</button>
                    <button class="btn btn-xs capitalize">Product Order</button>
                    <button class="btn btn-xs capitalize">Canceled Order</button>
                </div>

                <div className='grid grid-cols-2 gap-2 mb-2'>
                    <PrintButton btnSize='btn-xs' />

                    <NewButton modalId={'create-new-order'} btnSize='btn-xs' />
                </div>
                <input type="checkbox" id="create-new-order" class="modal-toggle" />
                <label for="create-new-order" class="modal cursor-pointer">
                    <label class="modal-box w-11/12 max-w-4xl relative" for="">
                        <ModalCloseButton modalId={'create-new-order'} />

                        <ModalHeading modalHeading={'Create a Pharmacy order'} />

                        <div class="flex flex-col w-full lg:flex-row mt-4 place-content-center">
                            <div class="grid">
                                <h3 className='text-xl'>Choose product</h3>

                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Select title={'Suplier'} />
                                    <Input title={'Tread Name'} />
                                </div>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Category'} />
                                    <Input title={'Strength'} />
                                </div>
                                <div className='grid grid-cols-2 gap-x-4'>
                                    <Input title={'Box'} />
                                    <Input title={'Unit'} />
                                </div>

                                <div>
                                    <div class="overflow-x-auto py-3">
                                        <table class="table table-compact w-full">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th>Str</th>
                                                    <th>Cat</th>
                                                    <th>Company</th>
                                                    <th>Pack</th>
                                                    <th>TP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>Beximco Pharma</td>
                                                    <td>Box</td>
                                                    <td>510</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>Beximco Pharma</td>
                                                    <td>Box</td>
                                                    <td>510</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>Beximco Pharma</td>
                                                    <td>Box</td>
                                                    <td>510</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>Beximco Pharma</td>
                                                    <td>Box</td>
                                                    <td>510</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>Beximco Pharma</td>
                                                    <td>Box</td>
                                                    <td>510</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <SaveButton extraClass={'mt-4'} />
                            </div>

                            <div class="divider lg:divider-horizontal"></div>

                            <div class="grid">
                                <h3 className='text-xl'>Order Items</h3>
                                <div class="flex justify-between">
                                    <button class="btn btn-xs btn-outline btn-warning justify-between">Add from Requared Items</button>
                                    <button class="btn btn-xs btn-outline btn-error">Clear All</button>
                                </div>
                                <div>
                                    <div class="overflow-x-auto">
                                        <table class="table table-compact w-full">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Name</th>
                                                    <th>Str</th>
                                                    <th>Cat</th>
                                                    <th>Stk</th>
                                                    <th>Qnt</th>
                                                    <th>TP</th>
                                                    <th>Act</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>0</td>
                                                    <td>2</td>
                                                    <td>510</td>
                                                    <td>Delete</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>0</td>
                                                    <td>2</td>
                                                    <td>510</td>
                                                    <td>Delete</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>0</td>
                                                    <td>2</td>
                                                    <td>510</td>
                                                    <td>Delete</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>0</td>
                                                    <td>2</td>
                                                    <td>510</td>
                                                    <td>Delete</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Napa</td>
                                                    <td>500 MG</td>
                                                    <td>Tab</td>
                                                    <td>0</td>
                                                    <td>2</td>
                                                    <td>510</td>
                                                    <td>Delete</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <CancelButton extraClass={'mt-4'} />
                            </div>
                        </div>
                    </label>
                </label>
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    {
                        tableHead
                    }
                </thead>
                <tbody>
                    <SuppliersDocumentsRow />
                    <SuppliersDocumentsRow />
                    <SuppliersDocumentsRow />
                    <SuppliersDocumentsRow />
                </tbody>
                <tfoot>
                    {
                        tableHead
                    }
                </tfoot>
            </table>
        </div>
    );
};

export default SuppliersList;