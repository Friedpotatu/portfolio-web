// Utilidad para obtener colores consistentes de tecnologías
export function getTechColor(tech: string): string {
    const techColors: Record<string, string> = {
        'Laravel 12': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
        'Laravel 8': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
        'Bootstrap 5': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
        'Tailwind CSS': 'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200',
        'MariaDB': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
        'Django': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
        'Random Forest': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
        'SQLite': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        'SQL Anywhere': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
        'D3.js': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        'Python': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
        'FastAPI': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
        'Livewire': 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200',
        'Blade': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
        'Scikit-learn': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
        'Pandas': 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
        'Matplotlib': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
    };
    
    return techColors[tech] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
}