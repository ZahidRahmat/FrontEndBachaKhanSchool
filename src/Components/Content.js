import school from './Images/school.jpg';
import bachakhan from'./Images/bachakhan.jpg';
import library from './Images/library.jpg';
import student1 from './Images/student1.jpg';
import student2 from './Images/student2.jpg';
import teacher from './Images/teacher.jpg';
import './Css/Content.css';



function Content(){
    return(
      <div class="album py-5 bg-light">
         
      <div class="container">
      
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="">
            <div class="card shadow-sm">
            <img src={student2} class="imgesss" alt="..."/>
              <div class="card-body">
                <p class="card-text">ګلالی ماشومان د ترانه ویلو په حال کی پوهنه رڼا ده </p>
                <div class="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card shadow-sm">
            <img src={school} class="imgesss" alt="..."/>  
              <div class="card-body">
                <p class="card-text">باچا خان مکتب د نوی نسل د بنسټيزې روزنې ته ژمن</p>
                <div class="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card shadow-sm">
            <img src={bachakhan} class="imgesss" alt="..." />  
              <div class="card-body">
                <p class="card-text">تعلم د هر فرد مسلم حق دی</p>
                <div class="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>
          </div>
  
          <div class="">
            <div class="card shadow-sm">
            <img src={library} class="imgesss" alt="..." />
  
              <div class="card-body">
                <p class="card-text">د زده کوونکو لیدنه د اکسوس کتابتون څخه </p>
                <div class="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card shadow-sm">
            <img src={student1} class="  imgesss" alt="..." />
  
              <div class="card-body">
                <p class="card-text">تعلم تر ټولو ځواکمنه وسله ده چی نړی پری بدلوی شی</p>
                <div class="d-flex justify-content-between align-items-center">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card shadow-sm">
            <img src={teacher} class="imgesss" alt="..." />
  
              <div class="card-body">
                <p class="card-text">د ښوونکی مینه د ګلالیو زده کوونکو سره</p>
                <div class="d-flex justify-content-between align-items-center">
                  
                  
                </div>
              </div>
            </div>
          </div>
          
         
  
          
        
         
        </div>
      </div>
    </div>
   
    )
}
export default Content;