import { Button } from "@chakra-ui/react";

const CategoryForm = () => {
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>

                <Button type="submit">Add Budget</Button>
            </form>
        )
}

export default CategoryForm;   