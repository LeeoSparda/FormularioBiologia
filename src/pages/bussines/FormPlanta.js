export class FormPlanta {
    
    constructor(title){
        this.title = title;
        this.descriptions =[{descricao: '', status: false}];
    }

    setDescricao(text){
        this.descriptions.push({descricao: text, status: false});
    }
    getDescricao(){
        return this.descriptions;
    }
    onChange(descricao){
        this.descriptions = this.descriptions.map(value=>
            value.descricao == descricao ? {descricao: value.descricao, status: true} : 
            {descricao: value.descricao,  status: value.status})
    }
}
