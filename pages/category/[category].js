// import { useRouter } from "next/router";


const Category = ({ category, name }) => {
    
    // const router = useRouter();
    // const { category } = router.query;


    return (
        <div>
            <h3>
                Category {category} {name}
            </h3>
        </div>
    )
}


export default Category;


export async function getStaticPaths() {
    
    const  paths = [
        { params: { category: "web" } }, 
        { params: { category: "travel" } }, 
      ];

    return {paths, fallback: false};
    
  }

  export async function getStaticProps(params) {
    
    const category = params.params.category;
    
    return {
      props: { category, name: "neeraj" },
    }
  }