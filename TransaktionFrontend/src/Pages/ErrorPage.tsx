import { Heading,Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";



const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>Ooops...</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "Page not found"
          : "An unexpected error has occurred."}
      </Text>
    </>
  );
};

export default ErrorPage;