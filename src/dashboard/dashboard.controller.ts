import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('overview')
  getOverview() {
    return this.dashboardService.getOverview();
  }

  @Get('farms-by-state')
  getFarmsByState() {
    return this.dashboardService.getFarmsByState();
  }

  @Get('cultures')
  getCulturesDistribution() {
    return this.dashboardService.getCulturesDistribution();
  }

  @Get('land-use')
  getLandUse() {
    return this.dashboardService.getLandUse();
  }
}
