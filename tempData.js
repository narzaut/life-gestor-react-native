import colors from './Colors'

export default tempData = [
    {
        name: 'Academico',
        color: colors.purple,
        todos: [
            {
                title: 'Modelado de sistemas',
                description: 'Hacer los practicos restantes',
                completed: false
            },
            {
                title: 'Calculadora Matematica Aplicada',
                description: '',
                completed: false,
            },
            {
                title: 'Administrador de peticiones',
                description: '',
                completed: true
            }
        ]
    },
    {
        name: 'Compras',
        color: colors.salmon,
        todos: [
            {
                title: 'Leche',
                completed: true
            },
            {
                title: 'Queso',
                completed: false
            }
        ]
    },
    {
        name: 'TU MAMA ES RE PUTA',
        color: colors.red,
        todos: [
            {
                title: 'Leche',
                completed: true
            },
            {
                title: 'Queso',
                completed: false
            }
        ]
    }
    
]