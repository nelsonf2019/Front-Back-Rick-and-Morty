import Card from './Card';

function Cards({characters}) { //es un array de objetos
    

   return (
      <div>
      {
         //en relacion de objetos literales, esto es un ejemplo
         characters.map(({id,name,species,gender,image}) => {
           return <span>
            <Card key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}           
            />
            
           </span>
            
         })
      }
   </div>
   )
}
export default Cards;