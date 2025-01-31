import React, { useState } from 'react';
import './MenuManager.css';

const MenuManager = () => {
    const [menus, setMenus] = useState([]); // Stores menus and their items
    const [selectedMenu, setSelectedMenu] = useState(null); // Tracks selected menu

    const [menuName, setMenuName] = useState('');
    const [menuDescription, setMenuDescription] = useState('');
    
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    // Function to add a new menu
    const addMenu = () => {
        if (!menuName.trim()) return;
        setMenus([...menus, { name: menuName, description: menuDescription, items: [] }]);
        setMenuName('');
        setMenuDescription('');
    };

    // Function to add an item to the selected menu
    const addItemToMenu = () => {
        if (!selectedMenu || !itemName.trim()) return;
        const updatedMenus = menus.map(menu =>
            menu.name === selectedMenu.name
                ? { ...menu, items: [...menu.items, { name: itemName, description: itemDescription, price: itemPrice }] }
                : menu
        );
        setMenus(updatedMenus);
        setItemName('');
        setItemDescription('');
        setItemPrice('');
    };

    return (
        <div className="menu-manager">
            <h2>Menu Manager</h2>

            {/* Menu Creation */}
            <div className="menu-creation">
                <input 
                    type="text" 
                    placeholder="Menu Name" 
                    value={menuName} 
                    onChange={(e) => setMenuName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Menu Description" 
                    value={menuDescription} 
                    onChange={(e) => setMenuDescription(e.target.value)} 
                />
                <button onClick={addMenu}>Add Menu</button>
            </div>

            {/* Display Menus */}
            <ul className="menu-list">
                {menus.map((menu, index) => (
                    <li key={index} onClick={() => setSelectedMenu(menu)} className={selectedMenu?.name === menu.name ? 'active' : ''}>
                        {menu.name}
                    </li>
                ))}
            </ul>

            {/* Display Selected Menu Items */}
            {selectedMenu && (
                <div className="menu-details">
                    <h3>{selectedMenu.name} Items</h3>
                    <p>{selectedMenu.description}</p>

                    {/* Item Creation */}
                    <div className="item-creation">
                        <input 
                            type="text" 
                            placeholder="Item Name" 
                            value={itemName} 
                            onChange={(e) => setItemName(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="Item Description" 
                            value={itemDescription} 
                            onChange={(e) => setItemDescription(e.target.value)} 
                        />
                        <input 
                            type="text" 
                            placeholder="Price" 
                            value={itemPrice} 
                            onChange={(e) => setItemPrice(e.target.value)} 
                        />
                        <button onClick={addItemToMenu}>Add Item</button>
                    </div>

                    {/* Item List */}
                    <ul className="item-list">
                        {selectedMenu.items.length > 0 ? selectedMenu.items.map((item, idx) => (
                            <li key={idx}>
                                <strong>{item.name}</strong> - {item.description} - ${item.price}
                            </li>
                        )) : <p>No items added yet.</p>}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuManager;
