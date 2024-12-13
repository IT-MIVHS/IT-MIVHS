export type Project = {
    title: string,
    desc: string,
    dateStart: Date,
    dateEnd?: Date,
};

export const projects: Project[] = [
    {
        title: "project-1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, culpa quisquam dicta quas aliquam maxime, ea sed omnis aspernatur, suscipit itaque ipsam a laborum. Quasi atque dignissimos expedita. Temporibus cum, culpa nostrum sunt doloremque nisi eos amet expedita similique hic tenetur, vitae rem. Dignissimos hic eligendi autem veritatis minima maxime!",
        dateStart: new Date(),
        dateEnd: new Date()
    },
    {
        title: "project-2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, culpa quisquam dicta quas aliquam maxime, ea sed omnis aspernatur, suscipit itaque ipsam ",
        dateStart: new Date(),
    }
];