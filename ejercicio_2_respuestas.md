## Ejercicio 2:

Conteste las siguientes preguntas. La respuesta debe estar en archivo ejercicio_2_respuestas.md, dentro del repositorio.

2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por ejemplo autenticación, solicitud de clientes activos para el usuario y solicitud de casos por cliente)

## Autenticacion:

1. Creacion de un slice autenticacion con estado inicial (isAuthenticated, user, loading, token).
2. Creacion  acciones asincrónicas para realizar la autenticacion (login y logout).
3. Reducers para actualizar el estado

## Solicitud de clientes activos:

1. Creacion de un slice de clientes con estado inicial (clients, loading, error).
2. Una accion asincrónica para obtener los clientes activos.
3. Reducers para manejar los estados de carga, éxito y error.

## Solicitud de casos por cliente:

1. Creacion de un Slice de casos con estado inicial (casos, loading, error).
2. Una accion asincrónica para obtener los logs de un cliente específico.
3. Reducers para manejar los estados de carga, éxito y error.

2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js?

- Si quisiera agregar alguna ruta nueva a la app seria cuestion de agregar un nuevo componente <Route path="/example" element={<ExamplePage/>} a mi root de rutas y tener en consideracion si la nueva ruta sera protegida a usuarios con privilegios para envolverla en un ProtectedRoute component
