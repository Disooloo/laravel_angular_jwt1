import { Component, OnInit } from '@angular/core';
import {Lead} from "../../../models/lead";
import {LeadService} from "../../../Services/crm/lead.service";

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  leads: Lead[]

  constructor(private leadService:LeadService) { }

  ngOnInit(): void {
    this.getLeaders()
  }

  private getLeaders() {
    this.leadService.getLeads().subscribe((data: Lead[]) => {
        this.leads = data
    })
  }
}
