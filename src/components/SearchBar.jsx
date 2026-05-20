import { Label, SearchField, ListBox, Select } from "@heroui/react";


const SearchBar = () => {
    return (
        <div className="flex flex-wrap gap-2 items-center">
            <div className="max-w-[400px] space-y-4 my-2">
                <SearchField fullWidth name="search">
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input placeholder="Search by car name..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
            </div>

            <div>
                <Select className="" placeholder="All types">
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="florida" textValue="Florida">
                                Florida
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="delaware" textValue="Delaware">
                                Delaware
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="california" textValue="California">
                                California
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="texas" textValue="Texas">
                                Texas
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="new-york" textValue="New York">
                                New York
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="washington" textValue="Washington">
                                Washington
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>
        </div>
    );
};

export default SearchBar;