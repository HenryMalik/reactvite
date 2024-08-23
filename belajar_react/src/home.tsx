const userData = [
    {
    'name': 'lorem ipsum',
    'age': 10,
    'gender': 'male',
    'region': 'asia'
    },
    {
        'name': 'lara croft',
        'age': 13,
        'gender': 'female',
        'region': 'america'
        },
        {
            'name': 'abdul somad',
            'age': 12,
            'gender': 'male',
            'region': 'africa'
            },
            {
                'name': 'larry the lobster',
                'age': 9,
                'gender': 'male',
                'region': 'america'
                },
                {
                    'name': 'jessica',
                    'age': 12,
                    'gender': 'female',
                    'region': 'asia'
                    },
]

const filteredData = userData.filter(item => item.age % 2 !== 0)
console.log(filteredData, '=== filtered data');
const Home = () =>{
    return (
        <div>
            {userData.map((item, index) => {
                let ItemGender = item.age
                return (
                    <span style={{
                        color: ItemGender % 2 == 0 && '#db1413' 
                    }}> {item.name}</span>
                )
            })}
            <h1>home screen</h1>
        </div>
    )
}



export default Home
