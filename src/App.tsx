import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PatientForm from './components/PatientForm'
import PatientsList from './components/PatientsList'


function App() {

	return (
		<>
			<div className='container mx-auto mt-20'>
				<h1 className='font-black text-5xl text-center md:w-2/3 md:mx-auto'>
					Seguimiento de Pacientes {''}
					<span className='text-indigo-700'>Veterinarias</span>
				</h1>

				<div className='mt-12 md:flex'>
					<PatientForm />
					<PatientsList /> {/* Componente que muestra la lista de pacientes */}


				</div>
			</div>
			<ToastContainer /> {/* Muestra notificaciones */}
		</>
	)
}

export default App
