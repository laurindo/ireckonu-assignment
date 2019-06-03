const COLUMNS = [{
  name: 'prefix',
  label: 'Prefix',
  order: 1,
}, {
  name: 'first_name',
  label: 'First Name',
  order: 2,
}, {
  name: 'last_name',
  label: 'Last Name',
  order: 3,
}, {
  name: 'suffix',
  label: 'Suffix',
  order: 3,
}, {
  name: 'loyalty_member_id',
  label: 'Loyalty Member ID',
  order: 5,
}, {
  name: 'phone',
  label: 'Phone',
  order: 5,
}, {
  name: 'address',
  label: 'Address',
  order: 5,
}, {
  name: 'birthdate',
  label: 'Birthdate',
  order: 5,
}, {
  name: 'language_preference',
  label: 'Language Preference',
  order: 5,
}]

export const ProfileDetailsGetColumnsHead = () => {
  return [...COLUMNS.map(column => column.label)];
};

export const ProfileDetailsGetColumns = () => {
  return [...COLUMNS.map(column => column.name)];
};
