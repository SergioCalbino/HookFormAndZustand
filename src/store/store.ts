import { create } from "zustand";
import { DraftPatient, Patient } from "../types";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import {v4 as uuidv4 } from 'uuid';

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return {...patient, id: uuidv4() };
}

export const usePatientStore = create<PatientState>()(
    devtools(
    persist((set) => ({
        patients: [],
        activeId: '',
        addPatient: (data) => {
            // Aca lo que hace es agregarle un id único a cada paciente y luego lo agrega a la lista de pacientes.
            const newPatient = createPatient(data);
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
            
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter((patient) => patient.id!== id)
            }))
            
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
            
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map((patient) => (
                    patient.id === state.activeId ? {id: state.activeId, ...data } : patient)
                ),
                activeId: ''
            }))
        }
    
    }), {
        name: 'Patient Storage',
        // storage: createJSONStorage(() => localStorage)
    })
))