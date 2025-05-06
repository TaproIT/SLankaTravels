
// import { useRouteError } from 'react-router-dom';

// function CustomError() {
//   const error = useRouteError();
//   console.error(error);

//   return (
//     <div>
//       <h1>Oops! An error occurred.</h1>
//       <p>{error.statusText || error.message}</p>
//     </div>
//   );
// }

// export default CustomError;
import { useRouteError } from 'react-router-dom';

function CustomError() {
  const error = useRouteError();
  console.error(error);

  if (error instanceof Error) {
    return (
      <div>
        <h1>Oops! An error occurred.</h1> 
        <p>{(error as any).statusText || error.message}</p>

      </div>
    );
  } else {
    return (
      <div>
        <h1>Oops! An unknown error occurred.</h1>
      </div>
    );
  }
}

export default CustomError;