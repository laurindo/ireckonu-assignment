const COLUMNS = [{
  name: 'photo',
  label: 'Photo',
  order: 1,
}, {
  name: 'localid',
  label: 'Label ID',
  order: 2,
}, {
  name: 'email',
  label: 'Email Address',
  order: 3,
}, {
  name: 'first_name',
  label: 'Name',
  order: 4,
}, {
  name: 'phone',
  label: 'Phone Number',
  order: 5,
}, {
  name: 'address',
  label: 'Address',
  order: 6,
}, {
  name: 'modified',
  label: 'Modified',
  order: 7,
}]

export const ProfileGetColumnsHead = () => {
  return [...COLUMNS.map(column => column.label)];
};

export const ProfileGetColumns = () => {
  return [...COLUMNS.map(column => column.name)];
};
