import Paragraph from './UI/Paragraph';
import List from './components/List';
import ProjectList from './components/ProjectList';
import { user, projects } from './constants/data';

const App = () => {
  return (
    <div className="container mx-auto p-8 max-w-5xl bg-white rounded-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{user.getFullName()}</h1>
        <h2 className="text-xl font-semibold">{user.jobTitle}</h2>
      </div>

      <div className="app-wrapper">
        <section className="flex flex-col gap-2">
          <div>
            <Paragraph text="Education" />
            <List list={user.education} />
          </div>

          <div>
            <Paragraph text="Work Experience" />
            <List list={user.experience} />
          </div>

          <div>
            <Paragraph text="Projects" />
            <ProjectList projects={projects} />
          </div>

          <div className="mb-4">
            <Paragraph text="About" />
            <p>{user.about}</p>
          </div>
        </section>
        <aside className="flex flex-col gap-2">
          <div>
            <Paragraph text="Contacts" />
            <div className="flex flex-col gap-1">
              {user.contacts.map((contact) => 
                <p key={contact}>
                  <strong>{contact.name}</strong>: {contact.value}
                </p>
              )}
            </div>
          </div>

          <div>
            <Paragraph text="Skills" />
            <div className="flex gap-1">
              {user.getSkills()}
            </div>
          </div>

          <div>
            <Paragraph text="Languages" />
            <div className="flex flex-col gap-1">
              {user.langs.map((lang) => 
                <p key={lang}>
                  <strong>{lang.name}</strong>: {lang.value}
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
};

export default App;