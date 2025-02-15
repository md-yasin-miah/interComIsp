const Tabs = ({ tabItems, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-1 rounded-xl bg-gray-200 p-1 dark:bg-slate-800">
      {tabItems.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.value)}
          className={`${activeTab === tab.value
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
            } relative rounded-lg px-8 py-3 text-sm font-medium transition-all duration-200`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  )
}

export default Tabs