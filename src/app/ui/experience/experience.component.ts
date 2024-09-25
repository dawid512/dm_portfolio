import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent{

  public experiences = [
    {
      startDate: '07.2021',
      endDate: '09.2021',
      companyName: 'Pitney Bowes',
      position: "Software Engineering Intern",
      description: `Designed and developed a user management tool utilizing Angular, RxJS, Scss, Angular Material, and NgRx Store. 
      
      Managed and enhanced the <b>Client Integration Platform</b>. 
      
      Collaborated closely with the broader development team.`,
    },
    {
      startDate: '10.2021',
      endDate: '05.2024',
      companyName: 'Pitney Bowes',
      position: "Junior Integration Engineer",
      description: `Developing and maintaining a <b>Client Integration Platform</b> with:

      A frontend built using Angular, RxJS, and state management with NgRx.

      Designing and creating custom and generic components, as well as dynamic reports, using PrimeNG, SCSS, and Angular Material to ensure responsive, scalable UI development.

      Engineering a backend architecture based on .NET microservices, incorporating CQRS for event sourcing and GraphQL for generating advanced reports.

      Playing a key role in developing REST API controllers to facilitate secure and efficient client-server communication.

      Managing data storage across multiple systems, including MongoDB, MS SQL, and Redis, to ensure optimal database performance and reliability.

      Deploying services using TeamCity and Octopus Deploy, with logging and monitoring managed via Kubernetes.

      Conducting comprehensive code reviews to maintain code quality and consistency across the project.

      Representing the company at industry conferences to showcase technical achievements and foster professional relationships.

      Contributing to architectural planning through brainstorming sessions and leading training initiatives for the development team, such as migrating to new .NET versions and explaining new features.

      Collaborated closely with the broader development team.
      `,
    },
    {
      startDate: '11.2022',
      endDate: 'Present',
      companyName: 'Coding Giants ',
      position: "Teacher",
      description: `Educating children on HTML page creation.`,
    },
    {
      startDate: '06.2024',
      endDate: 'Present',
      companyName: 'Pitney Bowes',
      position: "Integration Engineer",
      description: `Developing and maintaining a <b>Client Integration Platform</b> with:

      A frontend built using Angular, RxJS, and state management with NgRx.

      Designing and creating custom and generic components, as well as dynamic reports, using PrimeNG, SCSS, and Angular Material to ensure responsive, scalable UI development.

      Engineering a backend architecture based on .NET microservices, incorporating CQRS for event sourcing and GraphQL for generating advanced reports.

      Playing a key role in developing REST API controllers to facilitate secure and efficient client-server communication.

      Managing data storage across multiple systems, including MongoDB, MS SQL, and Redis, to ensure optimal database performance and reliability.

      Deploying services using TeamCity and Octopus Deploy, with logging and monitoring managed via Kubernetes.

      Conducting comprehensive code reviews to maintain code quality and consistency across the project.

      Representing the company at industry conferences to showcase technical achievements and foster professional relationships.

      Contributing to architectural planning through brainstorming sessions and leading training initiatives for the development team, such as migrating to new .NET versions and explaining new features.

      Collaborated closely with the broader development team.
      `,
    },
  ];
  
  

  public isSmallScreen(): boolean {
    return window.innerWidth < 800;
  }
}