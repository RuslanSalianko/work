// data.csv
/**
 * key; value;
 * name; David;
 * lastName; Gav;
 * friend.name; Peter;
 * dob; 01/01/1990;
 */

// key => 'name' => 'friend.name' => 'friend[0].name'

// Read file
// Create object => { [key]: [value] } => { name: 'David', lastName: 'Gav', dob: Date(01/01/1990), frient: { name: 'Peter' } }
// Save data to file data.json