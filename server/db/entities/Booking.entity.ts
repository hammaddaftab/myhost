import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

export type BookingType = 'calendar' | 'inquiry';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'enum',
    enum: ['calendar', 'inquiry']
  })
  type!: BookingType;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  email!: string;

  @Column({ type: 'varchar', nullable: true })
  phone?: string | null;

  @Column({ type: 'varchar', nullable: true })
  listingUrl?: string | null;

  @Column({ type: 'varchar', nullable: true })
  propertiesCount?: string | null;

  @Column({ type: 'varchar', nullable: true })
  consultationFocus?: string | null;

  @Column({ type: 'varchar', nullable: true })
  selectedDate?: string | null;

  @Column({ type: 'varchar', nullable: true })
  selectedTime?: string | null;

  @Column({ type: 'text', nullable: true })
  message?: string | null;

  @Column({ type: 'jsonb', nullable: true, default: {} })
  metadata?: Record<string, any> | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}
