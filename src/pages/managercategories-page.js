import React, { Component } from 'react'
import Globaldesign from '../components/globaldesign'
import Categorie from '../components/categorie'
import CategorieModel from '../models/model'
import axios from '../utils/axios'
export default class ManagerCategoriesPage extends Component {
    constructor() {
        super()
        this.state = {
            nom: "",
            description: "",
            list_categorie: [],
            backup:[]
        }
    }

    render() {
        return (
            <Globaldesign>
                <Categorie
                    change={this.change}
                    submit={this.submit}
                    data={this.state.list_categorie}
                    remove={this.remove}
                    edit={this.edit}
                ></Categorie>
            </Globaldesign>

        )
    }
    // remove=()=>{
    //     let choice = window.confirm("Are you sure?")
    //     if (choice == true) {


    //             let newList = this.state.list_categorie.filter(
    //                 (s) => s.id != idStudent

    //             );
    //             this.setState({ list_categorie: newList })



    //     }
    // }
    change = (event) => {
        let value = event.target.value;
        let name = event.target.name
        console.log(name)
        this.setState({ [name]: value })

    }
    submit = (event) => {
        event.preventDefault();
        //vider les inputs de formulaire
        event.target.reset();

        //validation de formulaire
        if (this.state.nom == "") {
            alert("veuillez remplir le nom de categorie")
        } else {
            let nvCategorie = new CategorieModel(
                0,
                this.state.nom,
                this.state.description
            )
            //vider states
            this.setState({
                nom: "",
                description: ""


            })
            //ajouter student a la liste
            let newcategorieList = this.state.list_categorie
            newcategorieList.push(nvCategorie)
            console.log(newcategorieList)
            this.setState({ list_categorie: newcategorieList })


            const data_categorie = {
            
                nom: nvCategorie.nom,
                description: nvCategorie.description
               
              };
        
              axios.post("categories.json", data_categorie).then((response) => {
                //console.log(response)
                let id_new_categorie = response.data.name;
               
        
                //chercher l'etudiant qui a l'Id==0 sur la liste
                let newListcategorie= this.state.list_categorie;
                newListcategorie.forEach((s) => {
                  if (s.id == 0) {
                    s.id = id_new_categorie;
                  }
                  //modifier la liste sur le state
        
                });
                this.setState({ list_categorie: newListcategorie })
                // const myNewStudent={
                //   nom:nStudent.nom,
                //   pren:nStudent.pren,
                //   email:nStudent.email,
                //   avatar:nStudent.avatar,
                //   id:id_new_student
                // }
        
                // console.log(myNewStudent)
              });
        
              // console.log(this.state.list_student_data);
              //recuperer les infos
              // alert(this.state.nom+"\n"+this.state.pren+"\n"+this.state.email);
        
        

        }


        //ajouter l'etudiant a la partie serveur (firebase) en utilisant axios ,lancer nStudent dans le document students
     
    }

    componentDidMount() {
        axios.get("categories.json").then((response) => {
          if (response.data != null) {
            //extraire toutes les clé de l'objet data
            let keys = Object.keys(response.data);
    
            //parcourir les keys
            let listcategorienew = keys.map((k) => {
              let ns = new CategorieModel(
                k,
                response.data[k].nom,
                response.data[k].description,
               
              );
    
              return ns;
            });
    
            //ajouter la liste
            this.setState({ list_categorie: listcategorienew });
            this.setState({ backup: listcategorienew });
    
            //ajouter un backup
           
          }
        });
      }

      remove = (idCategorie) => {
        let choice = window.confirm("Are you sure?");
    
        if (choice == true) {
          //supprimer un etudiant depuis firebase
          // alert(idStudent)
          // alert ("delete student")
          axios.delete("categories/" + idCategorie + ".json").then(() => {
            let newList = this.state.list_categorie;
            newList = newList.filter(
              (s) => s.id !== idCategorie);
    
            this.setState({ list_categorie: newList })
            //changer le backup aussi
            this.setState({ backup: newList })
           
    
          });
        }
    
      }

      edit= (Categorie) => {
        

           //changer le text button newStudent
           // alert(1)

    //ne pas acctualiser la page
    //event.preventDefault();

    //partie data a envoyer a firebase
    const categorie_data = {
      nom: this.state.nom,
      description: this.state.description,
     

    }

    //appel a la fonction put de axios
    // axios
    //   .put("students/" + this.state.updatedStudent_id + ".json", student_data)
    //   .then((response) => {

    //     //changer l'etudiant dans la liste
    //     let newList = this.state.list_student_data;
    //     newList.forEach((s) => {
    //       if (s.id == this.state.updatedStudent_id) {
    //         s.nom = response.data.nom;
    //         s.pren = response.data.pren;
    //         s.email = response.data.email;
    //         s.avatar = response.data.avatar;
    //       }
    //     });
    //     //modifier la liste du state
    //     this.setState({ list_student_data: newList })
    //     //modifier la liste backup aussi
    //     this.setState({ backupForFilterList: newList });

    //     //vider le formulaire
    //     event.target.reset();

    //     //vider les variables state
    //     this.setState({
    //       nom: "",
    //       pren: "",
    //       email: "",
    //       avatar: "",
    //       updatedStudent_id: -1,
    //       textBtnState: "Add Student",
    //       iconBtnState: "fas fa-plus-circle",
    //       action: "ADD",



    //     })
    //   });
    
      }

}