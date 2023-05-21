import { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToyContext } from '../Home/Home';
import CategoryPanel from './CategoryPanel';

const ShopByCategory = () => {
    const { toys } = useContext(ToyContext);
    console.log(toys);
    const categoryArray = ['Science Kits', 'Math Learning Toys', 'Engineering Kits', 'Engineering Tools'];

    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3 font-playfair'>Shop By Category</h2>
                <p className='text-gray font-medium'>Explore our toy shop</p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Science Kits</Tab>
                    <Tab>Math Learning Toys</Tab>
                    <Tab>Engineering Kits</Tab>
                    <Tab>Engineering Tools</Tab>
                </TabList>
                {
                    categoryArray.map((category, i) => <TabPanel
                        key={i}>
                        <CategoryPanel
                            category={category}
                        ></CategoryPanel>
                    </TabPanel>)
                }
            </Tabs>
        </div>
    );
};

export default ShopByCategory;