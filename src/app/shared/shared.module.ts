import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';

@NgModule({
  imports: [CommonModule, TableModule],
  exports: [CommonModule, TableModule],
})
export class SharedModule {}
