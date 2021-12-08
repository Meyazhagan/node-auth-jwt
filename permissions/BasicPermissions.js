const canViewProjects = (user, role, project) => {
    if (user.role === role) return project;
};
