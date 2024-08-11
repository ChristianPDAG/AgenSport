
const TableTrainers = () => {
    const data = [
      {
        Rut: '1111',
        Nombre: 'chris',
        Apellido: 'ave',
        Teléfono: '9999',
        Correo_electrónico: 'mail@exmple.cl',
        Disciplina: 'Karate',
        Sueldo: '$20.000',
      },
      // Agrega más datos aquí si lo deseas
    ];
  
    return (
      <div className="overflow-x-auto flex flex-col">
        <table className="min-w-full bg-white border border-gray-200 text-xs">
          <thead>
            <tr>
              <th className="py-2 px-2 border-b text-left">Rut</th>
              <th className="py-2 px-2 border-b text-left">Nombre</th>
              <th className="py-2 px-2 border-b text-left">Apellido</th>
              <th className="py-2 px-2 border-b text-left">Teléfono</th>
              <th className="py-2 px-2 border-b text-left">Correo electrónico</th>
              <th className="py-2 px-2 border-b text-left">Disciplina</th>
              <th className="py-2 px-2 border-b text-left">Sueldo</th>
              <th className="py-2 px-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.Rut} className="hover:bg-gray-100">
                <td className="py-2 px-2 border-b truncate">{row.Rut}</td>
                <td className="py-2 px-2 border-b truncate">{row.Nombre}</td>
                <td className="py-2 px-2 border-b truncate">{row.Apellido}</td>
                <td className="py-2 px-2 border-b truncate">{row.Teléfono}</td>
                <td className="py-2 px-2 border-b truncate">{row.Correo_electrónico}</td>
                <td className="py-2 px-2 border-b truncate">{row.Disciplina}</td>
                <td className="py-2 px-2 border-b truncate">{row.Sueldo}</td>
                <td className="py-2 px-2 border-b">
                  <button className="text-blue-500 hover:text-blue-700">Editar</button>
                  <button className="ml-2 text-red-500 hover:text-red-700">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TableTrainers;
