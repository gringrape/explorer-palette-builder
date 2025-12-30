export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      survey_responses: {
        Row: {
          basin_height_type:
            | Database["public"]["Enums"]["basin_height_type_enum"]
            | null
          building: string | null
          created_at: string
          depth: string | null
          door_type: Database["public"]["Enums"]["door_type_enum"] | null
          floor: number | null
          grab_bar_type:
            | Database["public"]["Enums"]["grab_bar_type_enum"]
            | null
          has_accessible_restroom: boolean | null
          has_basin: boolean | null
          id: string
          is_basin_usable: boolean | null
          photos: string[] | null
          restroom_gender: string | null
          team_members: string[]
          team_name: string
          unavailable_reason: string[] | null
          updated_at: string
          width: string | null
        }
        Insert: {
          basin_height_type?:
            | Database["public"]["Enums"]["basin_height_type_enum"]
            | null
          building?: string | null
          created_at?: string
          depth?: string | null
          door_type?: Database["public"]["Enums"]["door_type_enum"] | null
          floor?: number | null
          grab_bar_type?:
            | Database["public"]["Enums"]["grab_bar_type_enum"]
            | null
          has_accessible_restroom?: boolean | null
          has_basin?: boolean | null
          id?: string
          is_basin_usable?: boolean | null
          photos?: string[] | null
          restroom_gender?: string | null
          team_members: string[]
          team_name: string
          unavailable_reason?: string[] | null
          updated_at?: string
          width?: string | null
        }
        Update: {
          basin_height_type?:
            | Database["public"]["Enums"]["basin_height_type_enum"]
            | null
          building?: string | null
          created_at?: string
          depth?: string | null
          door_type?: Database["public"]["Enums"]["door_type_enum"] | null
          floor?: number | null
          grab_bar_type?:
            | Database["public"]["Enums"]["grab_bar_type_enum"]
            | null
          has_accessible_restroom?: boolean | null
          has_basin?: boolean | null
          id?: string
          is_basin_usable?: boolean | null
          photos?: string[] | null
          restroom_gender?: string | null
          team_members?: string[]
          team_name?: string
          unavailable_reason?: string[] | null
          updated_at?: string
          width?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      basin_height_type_enum: "standard" | "high" | "low"
      door_type_enum:
        | "swing_door"
        | "sliding_door"
        | "automatic_door"
        | "accordion_door"
        | "folding_door"
      grab_bar_type_enum:
        | "horizontal-flexible"
        | "horizontal-fixed"
        | "vertical"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      basin_height_type_enum: ["standard", "high", "low"],
      door_type_enum: [
        "swing_door",
        "sliding_door",
        "automatic_door",
        "accordion_door",
        "folding_door",
      ],
      grab_bar_type_enum: [
        "horizontal-flexible",
        "horizontal-fixed",
        "vertical",
        "other",
      ],
    },
  },
} as const
