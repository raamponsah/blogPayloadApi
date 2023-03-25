
import { CollectionConfig } from 'payload/types';
const Staff: CollectionConfig ={
    slug:'staff',
    access:{read:()=>true},
    admin:{
        defaultColumns:[ 'id','title','about'],
        useAsTitle: 'title',
    },
    fields:[
        {
            name:'title',
            type: 'text'
        },
        {
            name:'about',
            type:'textarea'
        }
    ],
    

}

export default Staff;