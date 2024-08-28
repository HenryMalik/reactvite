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
// form : sword, bow, heavy, staff/wand, catalyst, shield
// type : physical, magic, utility
// origin : human, elf, dwarf, demigod/archmage
// material : metal, wood, crystal, monster parts
const FantasyWeapons = [
    {
      'name': 'Broadsword',
      'form': 'sword',
      'type': 'physical',
      'damage': 12,
      'color': 'iron grey',
      'origin': 'human',
      'material': 'metal'
    },
    {
        'name': 'Aegis',
        'form': 'shield',
        'type': 'utility',
        'damage': 0,
        'color': 'oak',
        'origin': 'human',
        'material': 'metal'
      },
      {
        'name': 'Recurve',
        'form': 'bow',
        'type': 'physical',
        'damage': 15,
        'color': 'oak',
        'origin': 'elf',
        'material': 'wood'
      },
      {
        'name': 'Claymore',
        'form': 'heavy',
        'type': 'physical',
        'damage': 23,
        'color': 'iron grey',
        'origin': 'dwarf',
        'material': 'metal'
      },
      {
        'name': 'Scepter',
        'form': 'staff',
        'type': 'magic',
        'damage': 16,
        'color': 'red',
        'origin': 'archmage',
        'material': 'crystal'
      },
      {
        'name': 'Smchorgs Core',
        'form': 'catalyst',
        'type': 'magic',
        'damage': 96,
        'color': 'purple',
        'origin': 'demigod',
        'material': 'monster parts'
      },
]

const filteredData = userData.filter(item => item.age % 2 !== 0)
console.log(filteredData, '=== filtered data');
const starterweapon = FantasyWeapons.filter(item => item.damage <= 25 )
console.log(starterweapon, '=== starter weapon');
const Home = () =>{
    return (
        <div>
            <h1>home screen</h1>
            {userData.map((item, index) => {
                let ItemGender = item.age
                return (
                    <span style={{
                        color: ItemGender % 2 == 0 && '#db1413'  
                    }}> {item.name}</span>
                )
            })}
        </div>
    )
    const Home2 = () => {
    return (
            <div>
                <p>Starter Weapon</p>
                {FantasyWeapons.map((item, index) => {
                    let ItemDamage = item.damage
                    return (
                        <span> {item.damage} </span>
                    )
                })}
            </div>
        )
    }
}



export default Home
