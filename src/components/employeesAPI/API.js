const employees = [
    {
        name: { first: 'Brad', last: 'Gibson'},
        email: 'brad.gibson@yahoo.com',
        dob: '14-01-1977',
        phone: '(033)-654-865',
        image: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
]

export function getEmployees() {
    return employees;
}