export interface Prescripcion {
    id?: number,
    paciente: number,
    medicamento: string,
    dosis: string,
    pauta: string,
    notas?: string
}
